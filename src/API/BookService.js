import axios from "axios";
import {wait} from "@testing-library/user-event/dist/utils";

export default class BookService {
    static async getAll(limit = 99999, page = 1) {
        const response = await axios.get('http://localhost:8080/books/getBooks', {
            // headers: {
            //     "Access-Control-Allow-Origin": "*"
            // },
            params: {
                limit: limit,
                page: page
            }
        })
        // const response = await getBooksData();

        return response
    }
}

async function getBooksData(){
    return [{
        "book_page_id": "6143042",
        "url": "https://rutracker.org/forum/viewtopic.php?t=6143042",
        "row_name": "Мельников Руслан – Мертвый рай 2, Полигон [Мицкевич Дмитрий, 2021, 128 kbps, MP3]",
        "book_name": "Мертвый рай",
        "year": "2019",
        "last_name": "Мельников",
        "fist_name": "Руслан",
        "executor": "Мицкевич Дмитрий",
        "cycle_name": "Мертвый рай",
        "book_number": "2",
        "genre": "Боевая фантастика, мистика",
        "edition_type": "неофициальное издание профессионального исполнителя",
        "category": "аудиокнига",
        "audio_codec": "MP3",
        "bitrate": "128 kbps",
        "bitrate_type": "постоянный битрейт (CBR)",
        "sampling_frequency": "44 kHz",
        "count_of_channels": "Стерео",
        "book_duration": "10:25:59",
        "description": "Группа «вежливых людей» таинственным образом перемещается во времени и пространстве. Из предгорий Ингушетии она оказывается в Северной Америке, а из XXI века попадает в XVIII век. А там уже вовсю кипят такие страсти, что даже у привычных ко всему бойцов «Студенческого СтройОтряда» голова кругом идет. Англичане ведут необъявленную войну с французами, а индейцы с теми и другими, а также между собой. На чью сторону стать пришельцам из будущего? Как им выжить в этой кровавой карусели? Как попасть в Россию, где царствует императрица Елизавета Петровна? Волей-неволей «вежливые люди» должны сделать свой выбор. И они его делают. Их вмешательство в боевые действия изменяет ход истории. Но это всего лишь начало их приключений…"
    },
        {
            "book_page_id": "6143043",
            "url": "https://rutracker.org/forum/viewtopic.php?t=6143042",
            "row_name": "Мельников Руслан – Мертвый рай 2, Полигон [Мицкевич Дмитрий, 2021, 128 kbps, MP3]",
            "book_name": "Я сталкер 2 Антизона",
            "year": "2020",
            "last_name": "Мельников",
            "fist_name": "Руслан",
            "executor": "Мицкевич Дмитрий",
            "cycle_name": "Мертвый рай",
            "book_number": "2",
            "genre": "Боевая фантастика, мистика",
            "edition_type": "неофициальное издание профессионального исполнителя",
            "category": "аудиокнига",
            "audio_codec": "MP3",
            "bitrate": "128 kbps",
            "bitrate_type": "постоянный битрейт (CBR)",
            "sampling_frequency": "44 kHz",
            "count_of_channels": "Стерео",
            "book_duration": "10:25:59",
            "description": "Группа «вежливых людей» таинственным образом перемещается во времени и пространстве. Из предгорий Ингушетии она оказывается в Северной Америке, а из XXI века попадает в XVIII век. А там уже вовсю кипят такие страсти, что даже у привычных ко всему бойцов «Студенческого СтройОтряда» голова кругом идет. Англичане ведут необъявленную войну с французами, а индейцы с теми и другими, а также между собой. На чью сторону стать пришельцам из будущего? Как им выжить в этой кровавой карусели? Как попасть в Россию, где царствует императрица Елизавета Петровна? Волей-неволей «вежливые люди» должны сделать свой выбор. И они его делают. Их вмешательство в боевые действия изменяет ход истории. Но это всего лишь начало их приключений…"
        },
        {
            "book_page_id": "6143044",
            "url": "https://rutracker.org/forum/viewtopic.php?t=6143042",
            "row_name": "Мельников Руслан – Мертвый рай 2, Полигон [Мицкевич Дмитрий, 2021, 128 kbps, MP3]",
            "book_name": "Я сталкер 2 Антизона",
            "year": "2021",
            "last_name": "Мельников",
            "fist_name": "Руслан",
            "executor": "Мицкевич Дмитрий",
            "cycle_name": "Мертвый рай",
            "book_number": "2",
            "genre": "Боевая фантастика, мистика",
            "edition_type": "неофициальное издание профессионального исполнителя",
            "category": "аудиокнига",
            "audio_codec": "MP3",
            "bitrate": "128 kbps",
            "bitrate_type": "постоянный битрейт (CBR)",
            "sampling_frequency": "44 kHz",
            "count_of_channels": "Стерео",
            "book_duration": "10:25:59",
            "description": "Группа «вежливых людей» таинственным образом перемещается во времени и пространстве. Из предгорий Ингушетии она оказывается в Северной Америке, а из XXI века попадает в XVIII век. А там уже вовсю кипят такие страсти, что даже у привычных ко всему бойцов «Студенческого СтройОтряда» голова кругом идет. Англичане ведут необъявленную войну с французами, а индейцы с теми и другими, а также между собой. На чью сторону стать пришельцам из будущего? Как им выжить в этой кровавой карусели? Как попасть в Россию, где царствует императрица Елизавета Петровна? Волей-неволей «вежливые люди» должны сделать свой выбор. И они его делают. Их вмешательство в боевые действия изменяет ход истории. Но это всего лишь начало их приключений…"
        }]
}