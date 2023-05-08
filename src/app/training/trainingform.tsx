'use client'
import { ChangeEvent, useState } from "react";
import { showRank } from "../page";





export const TrainingForm = () => {
    let [loading, setLoading] = useState(false);
    let [formValues, setFormValues] = useState({
        training: "",

    });


    //! Calculates the exp gain from training
    let showExperience = parseInt(formValues.training) * 10

    //! Displays the div that shows exp and stat gains.
    const displayComplete = document.getElementById("training-complete");
    function trainingComplete() {
        displayComplete!.classList.remove("hidden");
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

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
            // console.log(JSON.stringify(res.json()));
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

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
        displayComplete!.classList.add("hidden"); //! Hides div that shows stat gain after change.
    };


    return (

        <>
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

            <div id="training-complete" className="border border-white p-2 mt-10 hidden">
                <h1>Training Complete! You have gained {formValues.training} stat1 and {showExperience} experience. Please train again!</h1>
            </div>
        </>
    );
};