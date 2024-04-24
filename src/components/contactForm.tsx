import { useState } from "react"
import InputBox from "./inputBox"
import Button from "./button"
import Popup from "./popup"

interface IContactForm {
    name: string,
    organisationName: string,
    email: string,
    phone: string,
    message: string,
    [key: string]: string;
}

const ContactForm = () => {
    const [showPopup, setShowPopup] = useState(false);

    const [formData, setFormData] = useState<IContactForm>({
        name: "",
        organisationName: "",
        email: "",
        phone: "",
        message: ""
    })



    const handleCancel = () => {
        setShowPopup(!showPopup);
    };



    const inputData = [
        {
            name: "name",
            placeholder: 'Name',
            type: 'text',
        }
        , {
            name: "organisationName",
            placeholder: 'Organisation Name',
            type: 'text',
        }
        , {
            name: "email",
            placeholder: 'Email Address',
            type: 'email',

        }
        , {
            name: "phone",
            placeholder: 'Contact Number',
            type: 'number',
        }
        , {
            name: "message",
            placeholder: 'Message',
            type: 'text',
            textarea: true
        }]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setShowPopup(true)
            console.log(formData)
            console.log("Form submitted successfully!");
            setFormData({
                name: "",
                organisationName: "",
                email: "",
                phone: "",
                message: ""
            })
        } else {
            console.log("Form validation failed!");
        }

    }

    const [errors, setErrors] = useState<Partial<IContactForm>>({});

    const validateForm = () => {
        let isValid = true;
        const newErrors: Partial<IContactForm> = {};

        if (!formData.name) {
            isValid = false;
            newErrors.name = "Please enter your name";
        }

        if (!formData.organisationName) {
            isValid = false;
            newErrors.organisationName = "Please enter your organisation name";
        }

        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            isValid = false;
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone || !/^[6-9]\d{9}$/.test(formData.phone)) {
            isValid = false;
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.message) {
            isValid = false;
            newErrors.message = "Please enter your message";
        }

        setErrors(newErrors);
        return isValid;
    };

    return <div className="max-w-[1170px] my-16 mx-auto p-6 sm:p-8 font-montserrat overflow-hidden ">
        {showPopup && (
            <Popup
                onCancel={handleCancel}
                title="Form Submitted Successfully!"
                content="Thank you for submitting the form. We will reach out to you shortly."
                btnText="Close"
            />
        )}
        <div className="w-full shadow-full rounded-xl p-8 md:p-12 lg:p-16 md:flex justify-between gap-8">
            <div className="md:w-1/2">
                <h1 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#505050]">Got any questions?</h1>
                <p className="py-4 font-medium text-[#505050]">Let’s discuss it over a cup of coffee.</p>
            </div>
            <div className="relative md:w-[70%] grid md:grid-cols-2 md:gap-6">
                {inputData.map((item, index) => (
                    <InputBox
                        key={index}
                        name={item.name}
                        placeholder={item.placeholder}
                        type={item.type}
                        textarea={item.textarea}
                        value={formData[item.name]}
                        handleChange={handleChange}
                        error={errors[item.name]}
                    />
                ))}

                <div className="md:absolute bottom-4 right-0">

                    <Button text={"Submit"} onClick={onSubmit} />

                </div>
            </div>
        </div>

    </div>
}

export default ContactForm