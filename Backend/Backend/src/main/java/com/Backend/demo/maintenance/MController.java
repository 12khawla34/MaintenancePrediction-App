package com.Backend.demo.maintenance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Backend.demo.maintenance.MService;

@RestController
public class MController {

    @Autowired
    private MService MService;

    @GetMapping("/test")
    public String testApi() {
        return MService.fetchBatchData();
    }
}
