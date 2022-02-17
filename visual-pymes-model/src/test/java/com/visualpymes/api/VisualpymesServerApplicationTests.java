package com.visualpymes.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
class VisualpymesServerApplicationTests {


    @Autowired
    MockMvc mockMvc;

    @Autowired
    ClientRepository clientRepository;

    @Test
    @WithMockUser
    void returnsTheExistingClients() throws Exception {

        addSampleClients();

        mockMvc.perform(get("/api/clients"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].name", equalTo("Cliente 1")))
                .andExpect(jsonPath("$[1].name", equalTo("Cliente 2")))
                .andExpect(jsonPath("$[0].image", equalTo("../img/peinado.png")))
                .andExpect(jsonPath("$[1].image", equalTo("../img/torta.png")))
                .andExpect(jsonPath("$[0].description", equalTo("Paquete completo lavado, secado, peinado")))
                .andExpect(jsonPath("$[1].description", equalTo("Torta chocolate dos pisos")))
                .andExpect(jsonPath("$[0].price", equalTo(50.0)))
                .andExpect(jsonPath("$[1].price", equalTo(20.0)))
                .andExpect(jsonPath("$[0].category", equalTo("Estetica")))
                .andExpect(jsonPath("$[1].category", equalTo("Reposteria")))
                .andDo(print());
    }

    private void addSampleClients() {
        List<Client> clients = List.of(
                new Client("Cliente 1", "../img/peinado.png", "Paquete completo lavado, secado, peinado", 50.0, "Estetica"),
                new Client("Cliente 2", "../img/torta.png", "Torta chocolate dos pisos", 20.0, "Reposteria")
        );

        clientRepository.saveAll(clients);


    }


    @Test
    @WithMockUser
    void allowsToCreateANewClient() throws Exception {
        mockMvc.perform(post("/clients/new")
                        .param("id", "0")
                        .param("name", "Client 1")
                        .param("image", "../img/peinado.png")
                        .param("description", "Paquete completo lavado, secado, peinado")
                        .param("price", "50.0")
                        .param("category", "Estetica")
                )
                .andExpect(status().is(200));

        List<Client> existingClients = (List<Client>) clientRepository.findAll();
        assertThat(existingClients, contains(allOf(
                hasProperty("id", equalTo("0")),
                hasProperty("name", equalTo("Client 1")),
                hasProperty("image", equalTo("../img/peinado.png")),
                hasProperty("description", equalTo("Paquete completo lavado, secado, peinado")),
                hasProperty("price", equalTo("50.0")),
                hasProperty("category", equalTo("Estetica"))
        )));
    }
}