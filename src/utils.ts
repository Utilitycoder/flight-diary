import { NewDataEntry, Weather, Visibility } from "./types"

const toNewDiaryEntry = (object: unknown): NewDataEntry => {
    const newEntry: NewDataEntry = {
        date: "",
        weather: Weather.Sunny,
        visibility: Visibility.Great
    }
    return newEntry
}

const isString = (text: unknown): text is string => {
    return typeof text == 'string' || text instanceof String
}

const parseComment= (comment: unknown): string => {
    if(!comment || !isString(comment)) {
        throw new Error('Incorrent or missing comment')
    }

    return comment
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error("Incorrect or missing date: " + date)
    }

    return date
}

const parseWeather = (weather: unknown): Weather => {
    if (!weather || !isWeather(weather)) {
        throw new Error("Incorrect or missing weather: " + weather)
    }

    return weather
}

const isWeather = (weather: any): weather is Weather => {
    return Object.values(Weather).includes(weather)
}

const isVisibility = (params: any): params is Visibility => {
    return Object.values(Visibility).includes(params)
}

const parseVisibility = (visibility: unknown): Visibility => {
    if (!visibility || !isVisibility(visibility)) {
        throw new Error("Incorrect or missing visibility")
    }

    return visibility
}

export default toNewDiaryEntry