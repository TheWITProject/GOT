import './CareerMap.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";


function CareerMap() {
    return (
        <div className="CareerMap">
       
            <p>Welcome to Career Map!</p>
            <Grid container spacing={8}>
                <Grid item xs={4}>
                    <Link to="/careerinfo"><Box
                        sx={{
                            width: 250,
                            height: 250,
                            marginLeft: 10,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    /></Link>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            width: 250,
                            height: 250,
                            marginLeft: 10,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            width: 250,
                            height: 250,
                            marginLeft: 10,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            width: 250,
                            height: 250,
                            marginLeft: 10,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            width: 250,
                            height: 250,
                            marginLeft: 10,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            width: 250,
                            height: 250,
                            marginLeft: 10,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            width: 250,
                            height: 250,
                            marginLeft: 10,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            width: 250,
                            height: 250,
                            marginLeft: 10,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            width: 250,
                            height: 250,
                            marginLeft: 10,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default CareerMap;
