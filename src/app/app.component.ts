import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import StringUtils from './utils/string-utils';
import { GptService } from './service/gpt.service';
import { Chat } from './controller/chat';
import GptUtils from './utils/gpt-utils';
import { Role } from './enum/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ingredients = '';
  recipes: string[] = [];
  showResults = false;
  recipeDetails: string = '';
  recipeImage: string = '';
  loadingRecipes = false;
  loadingRecipeDetails = false;
  chat: Chat = new Chat();

  constructor(private http: HttpClient, private gptService: GptService) { }

  getRecipes(): void {
    this.setSystem();
    this.chat.addMessage(Role.USER, GptUtils.PROMPT_REQUEST_RECIPES);

    this.clearPage();
    this.loadingRecipes = true;

    try {
      this.gptService.makeRequest(this.chat.getMessages(), 0.5, 150).subscribe((res: any) => {
        this.chat.pushMessage(res);
        this.recipes = res.content.split('\n');
        this.sanitizeRecipes();
        this.loadingRecipes = false;
      });
    } catch (e) {
      console.error(e);
      this.loadingRecipes = false;
    }
  }

  private clearPage() {
    this.recipeDetails = '';
    this.recipeImage = '';
  }

  private setSystem() {
    this.chat.clearMessages();
    this.chat.addMessage(Role.SYSTEM, GptUtils.PROMPT_SYSTEM + this.ingredients);
  }

  private sanitizeRecipes() {
    this.recipes = StringUtils.removeEmptyStrings(this.recipes);
    this.recipes = StringUtils.removeSpecialCharacters(this.recipes);
    this.recipes = StringUtils.removeLeftNumbers(this.recipes);
    this.recipes = StringUtils.removeBlankSpaces(this.recipes);
    this.recipes = StringUtils.removeDuplicates(this.recipes);
  }

  getRecipeDetails(recipe: string): void {
    this.chat.addMessage(Role.USER, GptUtils.PROMPT_REQUEST_RECIPE_DETAILS.replace('{{RECEITA}}', recipe));
    const promptImage = GptUtils.PROMPT_REQUEST_IMAGE.replace('{{RECEITA}}', recipe);

    this.loadingRecipeDetails = true;

    try {
      this.gptService.makeImageRequest(promptImage).subscribe((res: any) => {
        this.recipeImage = res;
      });

      this.gptService.makeRequest(this.chat.getMessages(), 0.8, 1000).subscribe((res: any) => {
        this.chat.pushMessage(res);
        this.recipeDetails = res.content;
        this.loadingRecipeDetails = false;
      });
    } catch (e) {
      console.log(e);
      this.loadingRecipeDetails = false;
    }
  }
}
