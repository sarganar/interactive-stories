import { useEffect, useState } from "react";
import stories from "../db.json";


export const useStory = (storyId) => {

    const [storyBook, setStoryBook] = useState(null); // store the whole story book data
    const [nextChapter, setNextChapter] = useState({ pid: '1' }); // store which page to extract from the story book: object {page:''}
    const [chapterData, setChapterData] = useState({}); // store the history page to be render
    // const [metaData, setMetaData] = useState({}); // store the history page to be render

    // get the STORY BOOK (the whole story data)
    useEffect(() => {
        //  console.log('useStoryEngine:useEffect!', { storyId });
        const bookFound = stories.filter(
            // (item) => item.id === parseInt(storyId)
            (item) => item.route === String(storyId).trim()
        )[0];
        //  console.log('     ', { bookFound });
        setStoryBook(bookFound);// todo: handle error case:story not found
    }, [storyId]);

    // get the STORY CHAPTER to be render (fires on each choice)  
    useEffect(() => {
        //  console.log('useStoryEngine:useEffect!', { storyBook, nextChapter });
        if (storyBook === null) {
            //  console.log('     null storyBook!');
            return;
        }
        const chapterFound = storyBook.passages.filter(
            (item) => item.pid === nextChapter.pid
        )[0];

        // split text in to an array text, for correct screen presentation
        if (!Array.isArray(chapterFound.text)) { //isArray yet?
            const arrayText = chapterFound.text.split("\n");
            chapterFound.text = arrayText;
        }
        // console.log('        ', { chapterFound });

        setChapterData(chapterFound);
    }, [storyBook, nextChapter]);// todo: handle error case:story not found


    return {
        setNextChapter,
        chapterData,
        storyBook,
    }

}
