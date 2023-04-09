import { combineEpics, ofType } from "redux-observable";
import { Epic } from './store';
import { TarotCardActionTypes } from './data/tarotCard/TarotCardActionTypes';
import { map, mergeMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { TarotCard } from './data/tarotCard/TarotCard';
import { FetchThreeCardReadingSuccessCreator } from './data/tarotCard/TarotCardActions';

 const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6471948c29mshc84f1b7b6564f85p1021fbjsnd01bbab69cba',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        }
    };

const fetchThreeCardReadingEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(TarotCardActionTypes.FETCH_THREE_TAROT_CARD_READING),
        mergeMap(() => { console.log(process.env)
            return ajax({
                "async": true,
                "crossDomain": true,
                "url": "https://horoscope-astrology.p.rapidapi.com/threetarotcards",
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
                    "X-RapidAPI-Host": "horoscope-astrology.p.rapidapi.com"
                }
            }).pipe(
                map((response) => response.response as TarotCard[]),
                map(FetchThreeCardReadingSuccessCreator)
            );
        })
    );

export const rootEpic = combineEpics(
    fetchThreeCardReadingEpic,
);