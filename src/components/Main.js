import { useId } from "react"
import Card from "./Card"
const Main =(props)=> {

    const cardComponents = props.data.map(item => {

        const id = useId()

        return (
            <Card 
                key={props.data.indexOf(item)+ 1}
                location={item.location}
                imgUrl={item.imgUrl}
                year={item.year}
                description={item.description}
                isFavorite={item.isFavorite}
            />
        )
    })

    return (

        <main className="main" id="main">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    { cardComponents }
                </div>
            </div>
        </main>
    )
}

export default Main