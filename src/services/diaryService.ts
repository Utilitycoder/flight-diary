import diaryData from '../../data/diaries'
import { DiaryEntries, NonSensitiveEntries, Visibility, Weather } from '../types'


const getEntries = (): DiaryEntries[] => {
    return diaryData
}
const getNonSensitiveEntries = (): NonSensitiveEntries[] => {
    return diaryData.map(({id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility
    }))
}

const addDiary = (
    date: string, weather: Weather, visibility: Visibility, comment: string
    ): DiaryEntries => {
    const newDiaryEntry = {
        id: Math.max(...diaryData.map(d => d.id)) + 1,
        date,
        weather,
        visibility,
        comment
    }
    diaryData.push(newDiaryEntry)
    return newDiaryEntry
}

const findById = (id: number) : DiaryEntries | undefined => {
    const entry = diaryData.find(d => d.id === id)
    return entry
}

export default { getEntries, addDiary, getNonSensitiveEntries, findById }