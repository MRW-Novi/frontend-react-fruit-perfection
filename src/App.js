import React from 'react';
import {useForm} from "react-hook-form";
import Product from "./Product";
import './App.css';
import citroenen from './assets/citroenen.jpeg'
import limoenen from './assets/limoenen.png'
import ijsblokjes from './assets/ijsblokjes.jpg'
import {ReactComponent as ShoppingCart} from "./assets/winkelmandje.svg";

function App() {

    // const [messageValue, setMessageValue] = React.useState('');
    // const [checkedTerms, toggleCheckedTerms] = React.useState(false);
    // const [submitted, setSubmitted] = React.useState(false);

    const {handleSubmit, register, errors} = useForm(); //TODO hoe werkt destructureren precies? pre-defined positiones of op basis van reference naam?

    function onFormSubmit(data){
        console.log(data);
    }

    // function sendForm(e) {
        // console.log(`Het bericht: "${messageValue}" is succesvol verzonden`);
        // setSubmitted(true);
    // }

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/">Shop</a>
                    </li>
                    <li>
                        <a href="/">Ons verhaal</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                </ul>
                <ShoppingCart className={"shopping-cart-icon"}/>
            </nav>
            <header>
                <h1>Fruit perfection</h1>
                <button
                    type={"button"}
                    onClick={()=>console.log("jij wil shoppen")}
                >
                    Shop nu
                </button>
            </header>
            <main>
                <Product
                image={citroenen}
                title={"Citroen"}
                description={"Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."}
                position={"left"}
                />
                <Product
                    image={limoenen}
                    title={"Limoen"}
                    description={"Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen."}
                    position={"justify"}
                />
                <Product
                    image={ijsblokjes}
                    title={"IJsblokjes"}
                    description={"Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje. Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen."}
                    position={"right"}
                />
            </main>
            <footer>
                <div className={"form-container"}>
                    <h2>Contactformulier</h2>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <input
                            type="text"
                            placeholder={"Jouw bericht hier"}
                            name={"message"}
                            // onChange={()=>console.log(errors.message)}
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: "dit veld mag niet leeg zijn"
                                    },
                                    validate: (value) => value.includes('@'),
                                    maxLength: {
                                        value: 19,
                                        message: "max 19 characters"
                                    }
                                }
                            )}
                        />
                        {errors.message && <p>{errors.message.message}</p>}
                        <label htmlFor="terms-and-conditions">
                            <input
                                type="checkbox"
                                name={"terms-and-conditions"}
                                id={"terms-and-conditions"}
                                ref={register(
                                    {
                                        required:{
                                            value: true,
                                            message: "algemene voorwaarden accepteren"
                                        }
                                    }
                                )}
                            />

                            Ik ga akkoord met de algemene voorwaarden
                        </label>
                    <button
                        type={"submit"}
                        // disabled={!checkedTerms}
                        // onClick={sendForm}
                    >
                        Verstuur
                    </button>
                    </form>

                </div>
            </footer>
        </>
    );
}

export default App;
