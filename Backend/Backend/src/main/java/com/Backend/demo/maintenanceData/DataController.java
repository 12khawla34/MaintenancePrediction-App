package com.Backend.demo.maintenanceData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping
public class DataController {

    @Autowired
    private DataService dataService;

    @GetMapping("/api/maintenance-data")
    public List<Map<String, Object>> getMaintenanceData() {
        return dataService.getMaintenanceData();
    }

    @GetMapping("/api/vehicles")
    public List<Map<String, Object>> getVehicles() {
        return dataService.getMaintenanceData();
    }


}
