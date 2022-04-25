/**
 * A footer component that contains the copyright info.
 * @returns {JSX.Element} The rendered footer.
 */
function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {year}, Kyle Lierer</p>
        </footer>
    );
}

export default Footer;
