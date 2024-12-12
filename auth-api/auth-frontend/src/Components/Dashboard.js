import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Card, CardContent, Box, Grid, } from "@mui/material";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("Logged out successfully!");
        navigate("/login");
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Card sx={{ maxWidth: 600, width: '100%', boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Dashboard
                    </Typography>
                    <Typography variant="body1" align="center" sx={{ marginBottom: 3 }}>
                        Welcome to your personalized dashboard. Here you can manage your account and settings.
                    </Typography>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleLogout}
                                sx={{
                                    padding: "12px",
                                    fontSize: "1rem",
                                    boxShadow: 2,
                                    '&:hover': { backgroundColor: '#1976d2' },
                                }}
                            >
                                Logout
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Dashboard;
