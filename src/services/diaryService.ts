import diaryData from '../../data/diaries'
import { DiaryEntries, NonSensitiveEntries, NewDataEntry } from '../types'


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

const addDiary = (entry: NewDataEntry
    ): DiaryEntries => {
    const newDiaryEntry = {
        id: Math.max(...diaryData.map(d => d.id)) + 1,
        ...entry
    }
    diaryData.push(newDiaryEntry)
    return newDiaryEntry
}

const findById = (id: number) : DiaryEntries | undefined => {
    const entry = diaryData.find(d => d.id === id)
    return entry
}

export default { getEntries, addDiary, getNonSensitiveEntries, findById }