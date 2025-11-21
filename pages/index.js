import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    color: '#343a40',
    padding: '0',
    fontFamily: 'Arial, sans-serif',
  },
  icon: {
    fontSize: '6rem',
    marginBottom: '20px',
    color: '#ffc107',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '15px',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    maxWidth: '600px',
  },
  contact: {
    fontSize: '1rem',
    color: '#6c757d',
    marginTop: '15px',
    MarginBottom: '20px',
  },
};

class HomePage extends React.Component {

  state = {
    title: 'Em Obras!',
    message: 'Estamos aprimorando nossa plataforma para melhor servi-lo. Voltaremos em breve com novidades! Pedimos desculpas pelo inconveniente.',
    contact: 'contato@jgluciano.dev',
  };
  componentDidMount() {
    try {
      this._prevBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } catch (e) {
    }
  }

  componentWillUnmount() {
    try {
      document.body.style.overflow = this._prevBodyOverflow || '';
    } catch (e) {
    }
  }

  render() {
    const { title, message, contact } = this.state;
    return (
      <>
        <style jsx global>{`
          body { overflow: hidden; }
        `}</style>
        <div style={styles.container}>
          <span role="img" aria-label="construction" style={styles.icon}>🚧</span>
          <h1 style={styles.title}>{title}</h1>
          <p style={styles.message}>{message}</p>
          {contact && (
            <p style={styles.contact}>
              Para informações imediatas, por favor, envie um e-mail para: <strong>{contact}</strong>
            </p>
          )}
        </div>
      </>
    );
  }
}

export default HomePage;