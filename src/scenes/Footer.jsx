import SocialMediaIcons from "../components/SocialMediaIcons"

const Footer = () => {
    return (
        <footer className=" bg-red pt-4 pb-12">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons />
                <div className="md:text-left  text-center">
                    <p className="font-playfair font-bold text-2xl text-yellow mt-2">TYLER JOHNSON</p>
                    <p className="font-playfair text-xl font-bold">© 2023 TSJ<br />All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer