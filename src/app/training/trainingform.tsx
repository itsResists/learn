'use client'
import { ChangeEvent, useState } from "react";

export const TrainingForm = () => {
    let [loading, setLoading] = useState(false);
    let [formValues, setFormValues] = useState({
        training: "",

    });

    //! Calculates the exp gain from training
    let showExperience = parseInt(formValues.training) * 10

    //! Displays the div that shows exp and stat gains.
    const displayComplete = document.getElementById("training");
    function trainingComplete() {
        displayComplete!.classList.remove("hidden");
    }

    const energyCheck = document.getElementById("energy");
    function energyChecker() {
        if (energy < 10) {
            energyCheck!.classList.toggle("hidden");
            setLoading(false);
        }
        return;
    }

    const energy = 22231

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        energyChecker();
        //! Displays the div that shows not enough energy.
        if (energy >= 10) {

        try {
            const res = await fetch("/api/training", {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setLoading(false);
            if (!res.ok) {
                alert((await res.json()).message);
                return;
            }
            else if (res.ok) {
                console.log("Training Complete");
                trainingComplete(); //! Displays the area for exp and stat gains.
            }

        } catch (error: any) {
            setLoading(false);
            console.error(error);
            alert(error.message);
        }
    };
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
        displayComplete!.classList.add("hidden"); //! Hides div that shows stat gain after change.
        energyCheck!.classList.add("hidden"); //! Hides div that shows not enough energy after change.
    };



    return (

        <>
            <div id="training" className="border border-white p-2 mt-10 hidden">
                <h1>Training Complete! You have gained {formValues.training} stat1 and {showExperience} experience. Please train again!</h1>
            </div>
            <div id="energy" className="border border-white p-2 mt-10 hidden">
                <h1>You do not have enough energy to train currently. Please try again later.</h1>
            </div>
            <div>
                <p>Current Training: {formValues.training}</p>
                <p>Current Energy: {energy}</p>
            </div>
            <form
                onSubmit={onSubmit}
                className="flex flex-col gap-4 w-px-[500px] border-2 border-white rounded-xl p-10"
                id="training-form"
            >
                {/*  Drop Down Menus */}
                <label htmlFor="training">Training Length</label>
                <select required className="p-4 text-black" name="training" form="training-form" value={formValues.training} onChange={handleChange} >
                    <option value="">Select your training length</option>
                    <option value="10">Short</option>
                    <option value="2000">Medium</option>
                    <option value="5000">Long</option>
                </select>


                <button className="p-4 cursor-pointer bg-blue-500 text-white hover:bg-blue-700 rounded-xl"
                    disabled={loading} type="submit"
                >
                    {loading ? "loading..." : "Train"}
                </button>
            </form>
        </>
    );
};