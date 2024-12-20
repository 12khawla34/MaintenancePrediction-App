//package com.Backend.demo.maintenanceData;
//
//import org.springframework.stereotype.Service;
//
//import java.util.*;
//
//@Service
//public class DataService {
//
//    public List<Map<String, Object>> getMaintenanceData() {
//        List<Map<String, Object>> jsonObject = new ArrayList<>();
//
//        for (int i = 0; i < 3; i++) {
//            Map<String, Object> data = new LinkedHashMap<>();
//            data.put("Mileage", 78609.41);
//            data.put("Reported_Issues", 4);
//            data.put("Vehicle_Age", 9);
//            data.put("Engine_Size", 2452);
//            data.put("Odometer_Reading", 145855);
//            data.put("Insurance_Premium", 29304);
//            data.put("Service_History", 9);
//            data.put("Accident_History", 2);
//            data.put("Fuel_Efficiency", 19.721879959106445);
//            data.put("Vehicle_Model", "Car");
//            data.put("Maintenance_History", "Poor");
//            data.put("Fuel_Type", "Diesel");
//            data.put("Transmission_Type", "Manual");
//            data.put("Owner_Type", "Third");
//            data.put("Tire_Condition", "Worn Out");
//            data.put("Brake_Condition", "Worn Out");
//            data.put("Battery_Status", "New");
//            data.put("Prediction", i == 2 ? 1 : 0); // Modifier Prediction pour le dernier objet
//            jsonObject.add(data);
//        }
//
//        return jsonObject;
//    }
//}


























package com.Backend.demo.maintenanceData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.*;

@Service
public class DataService {

    @Autowired
    private RestTemplate restTemplate;

    private static final String API_URL = "http://localhost:8000/api/vehicles";

    public List<Map<String, Object>> getMaintenanceData() {
        List<Map<String, Object>> vehicles = restTemplate.getForObject(API_URL, List.class);

        if (vehicles == null) {
            return new ArrayList<>();
        }

        return vehicles;
    }
}

