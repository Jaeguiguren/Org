import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/profile.php?id=100013575109144'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.linkedin.com/in/jose-eguiguren-herrera-0898b8252/'>
                <img src="/img/linkedin.png" alt='linkedin' />
            </a>
            <a href='https://www.instagram.com/joseeguiguren_6/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Jose Eguiguren</strong>
    </footer>
}

export default Footer