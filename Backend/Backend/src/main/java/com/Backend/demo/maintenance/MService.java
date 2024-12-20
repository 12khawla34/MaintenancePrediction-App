package com.Backend.demo.maintenance;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MService {
    private final RestTemplate restTemplate;

    public MService() {
        this.restTemplate = new RestTemplate();
    }

    public String fetchBatchData() {
        try {
            String url = "http://192.168.3.139:8000/get_batch";
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

            // Mapper JSON pour lire la réponse
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(response.getBody());

            // Accéder au champ "batch"
            JsonNode batchNode = rootNode.get("batch");

            // Afficher uniquement "batch" dans la console
            System.out.println("Batch Data: " + batchNode.toPrettyString());

            // Retourner les données "batch" sous forme de chaîne
            return batchNode.toString();
        } catch (Exception e) {
            e.printStackTrace();

            return "Error fetching batch data";
        }
    }

//    public static void main(String[] args) {
//        // Tester le service
//        Service service = new Service();
//        String batchData = service.fetchBatchData();
//
//        System.out.println("Returned Batch Data: " + batchData);
//    }
}
