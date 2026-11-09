import { useState } from 'react';
import './App.css';
import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';

function App() {
    // 1. El estado global de la ciudad vive ahora en el componente App
    const [cityInput, setCityInput] = useState('');

    return (
        <Grid container spacing={5} sx={{ justifyContent: 'center', alignItems: 'center' }}>

            {/* Encabezado */}
            <Grid size={{ xs: 12, md: 12 }}>
                <HeaderUI />
            </Grid>

            {/* Alertas */}
            <Grid size={{ xs: 12, md: 12 }}
                container sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                <AlertUI description="No se prevén lluvias" />
                <AlertUI description="Índice UV alto" severity="warning" variant="filled" />
            </Grid>

            {/* Selector */}
            <Grid size={{ xs: 12, md: 3 }}>
                {/* 2. Le pasamos el estado y la función modificadora como props */}
                <SelectorUI cityInput={cityInput} setCityInput={setCityInput} />
            </Grid>

            {/* Indicadores - App ya conoce la ciudad y puede usarla aquí */}
            <Grid size={{ xs: 12, md: 9 }}>
                {cityInput ? (
                    <p style={{ fontWeight: 'bold' }}>
                        Mostrando indicadores climáticos para: <span style={{ textTransform: 'capitalize' }}>{cityInput}</span>
                    </p>
                ) : (
                    <p>Elemento: Indicadores (Seleccione una ciudad)</p>
                )}
            </Grid>

            {/* Gráfico */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                Elemento: Gráfico
            </Grid>

            {/* Tabla */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                Elemento: Tabla
            </Grid>

            {/* Información adicional */}
            <Grid size={{ xs: 12, md: 12 }}>Elemento: Información adicional</Grid>

        </Grid>
    );
}

export default App;