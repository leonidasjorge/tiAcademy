package br.com.tiacademy.vendas.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.tiacademy.vendas.core.crud.Crudcontroller;
import br.com.tiacademy.vendas.domain.Vendedor;

@RestController
@RequestMapping("/vendedor")
public class VendedorController extends Crudcontroller<Vendedor, Long >  {
	
}
