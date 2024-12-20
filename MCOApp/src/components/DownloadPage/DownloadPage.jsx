import { useNavigate } from "react-router-dom";
import "./DownloadPage.css";
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import axios from 'axios';

const DownloadPage = () => {
    const [jsonData, setJsonData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/vehicles');
                const data = response.data;

                console.log("Données récupérées:", data);

                if (Array.isArray(data) && data.length > 0) {
                    data.forEach(item => {
                        if (item.prediction === 0) {
                            item.prediction = 'No Maintenance Needed';
                        } else if (item.prediction === 1) {
                            item.prediction = 'Need Maintenance';
                        }
                    });
                    setJsonData(data);
                } else {
                    console.error("Les données ne sont pas au format attendu");
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []); 

    const BackHomePage = () => {
        navigate('/');
    };

    return (
        <Container className="containeer">
            <div className="download">
                <h2 style={{ alignItems: "center", textAlign: "left", marginTop: "30px", color: "#fff" }}>
                    Take a Look at The results !
                </h2>

                {jsonData.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                {Object.keys(jsonData[0]).map((key, index) => (
                                    <th key={index}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {jsonData.map((item, index) => (
                                <tr key={index}>
                                    {Object.values(item).map((value, valueIndex) => {
                                        const textClass = value === 'No Maintenance Needed' ? 'no-maintenance' :
                                            value === 'Need Maintenance' ? 'need-maintenance' : '';

                                        return (
                                            <td key={valueIndex}>
                                                <span className={textClass}>{value}</span>
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Aucune donnée à afficher.</p>
                )}

                <button className="btn" onClick={BackHomePage}>Back to Home Page</button>
            </div>
        </Container>
    );
};

export default DownloadPage;
