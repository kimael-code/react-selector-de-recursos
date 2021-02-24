import './footer.css';

/**
 * Mi componente Footer de Bulma.
 */
function Footer() {
  return (
    <footer className="footer py-6">
      <div className="content has-text-centered">
        <p>
          <strong>Selector Básico de Recursos</strong> por <a href="https://twitter.com/_kimael_">Maikel Carballo</a>.
        </p>
        <p>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </a>
          <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">
            <img
              src="/made-with-bulma--semiblack.png"
              alt="Made with Bulma"
              width="128"
              height="24" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
