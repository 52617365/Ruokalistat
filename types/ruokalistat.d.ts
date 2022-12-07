export interface RuokalistatResponse {
    LunchMenu:             LunchMenu;
    RequireDietFilters:    EDietFilter[];
    ExcludeDietFilters:    EDietFilter[];
    RestaurantDietFilters: any[];
}

export interface LunchMenu {
    Restaurant: string;
    DayOfWeek: string;
    Date:      string;
    SetMenus:  SetMenu[];
}

export interface EDietFilter {
    Name:                   string;
    TranslatedName:         string;
    Diet:                   string;
    Selected:               boolean;
    Inactive:               boolean;
    AdditionalVisibleDiets: string[];
}


export interface SetMenu {
    Name:      string;
    Price:     string;
    Meals:     Meal[];
}

export interface Meal {
    Name:      string;
    RecipeId:  number;
    Diets:     string[];
    Nutrients: Nutrients;
    IconUrl:   string;
}

export interface Nutrients {
    EnergyCalories: string;
    Protein:        string;
    Carbohydrates:  string;
    Fat:            string;
}
