import './App.css';
import { useState, useEffect } from 'react'

function Question(props) {
    const [question, setQuestion] = useState(null)
    const [show, setShow] = useState(false)
    const getQuestion = async () => {
        try {
            const response = await fetch(`http://jservice.io/api/random`)
            const data = await response.json()
            setShow(prevShow => false)
            console.log(data);
            setQuestion(data)
            
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        // getQuestion()
        
    }, [question])
    return(
        <>
        <button onClick= {getQuestion}>Question</button>
        {
            question  ? (
                <div>
                    <h3>Category:{question[0].category.title}</h3>
                    <h3>Points: {question[0].value}</h3>
                    <h3>Answer: {question[0].question}</h3>
                    {show ? (<h2>{question[0].answer}</h2>):(<button onClick= {() => setShow(prevShow => !prevShow)} >Show Solution</button>)}
                    
                </div>
            ) : ""
        }
        
       </>
    );
}

        

export default Question;


// API Key: 9FD716C6-CF59-4932-98C6-996306A69742