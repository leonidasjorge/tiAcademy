package br.com.tiacademy.vendas.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.tiacademy.vendas.core.crud.Crudcontroller;
import br.com.tiacademy.vendas.domain.Cliente;

@RestController
@RequestMapping("/cliente")
public class ClienteController extends Crudcontroller<Cliente, Long > {
	
}
