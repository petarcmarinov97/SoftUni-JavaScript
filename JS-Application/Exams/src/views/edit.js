import { html} from "../../node_modules/lit-html/lit-html.js";
import { getCarById,editCar } from "../api/data.js";

const editTemplate=(car,onSubmit)=>html`
    <section id="edit-listing">
            <div class="container">

                <form @submit=${onSubmit} id="edit-form">
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>
`;

export async function editPage(ctx){
    const carId=ctx.params.id;
    const car=await getCarById(carId);
    ctx.render(editTemplate(car,onSubmit));

    async function onSubmit(event){
        event.preventDefault();
        const formData=new FormData(event.target);
        const brand=formData.get('brand').trim();
        const model=formData.get('model').trim();
        const year=Number(formData.get('year'));
        const price=Number(formData.get('price'));
        const imageUrl=formData.get('imageUrl').trim();
        const description=formData.get('description').trim();

        if(!price || !year || !model || !brand || !description|| !imageUrl){
            return alert('All fields are required!');
        }

        if(year <=0 || price<=0 ){
            return alert('Year and Price numbers must be possitive!');
        }

        await editCar(carId,{
            brand,
            model,
            description,
            year,
            imageUrl,
            price

        })
        event.target.reset();
        ctx.page.redirect('/all-listings');
    }
}
