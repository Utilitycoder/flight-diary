export enum Weather {
    Sunny = 'sunny', 
    Rainy = 'rainy', 
    cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy',
};

export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
}

export interface DiaryEntries {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment?: string;
}

export type NonSensitiveEntries = Omit<DiaryEntries, 'comment'>

export type NewDataEntry = Omit<DiaryEntries, "id"> 