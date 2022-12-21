export interface RuokalistatResponse {
    dayOfWeek:    string;
    date:         Date;
    menuPackages: MenuPackages[];
    html:         null;
    isManualMenu: boolean;
    restaurant: string;
}

export interface MenuPackages {
    sortOrder: number;
    name:      string;
    price:     string;
    meals:     Meal[];
}

export interface Meal {
    name:                string;
    diets:               string[];
    nutrients:           Nutrients;
    structuredNutrients: StructuredNutrient[];
    iconUrl:             string;
}

export interface Nutrients {
    energyCalories: string;
    energyKj:       string;
    protein:        string;
    carbohydrates:  string;
    fat:            string;
    fatSaturated:   string;
    sugars:         string;
    fibre:          string;
    salt:           string;
}

export interface StructuredNutrient {
    name:   string;
    amount: number;
    unit:   Unit;
}

export enum Unit {
    G = "g",
    KJ = "kJ",
    Kcal = "kcal",
}
