package br.com.tiacademy.vendas.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.tiacademy.vendas.core.crud.CrudController;
import br.com.tiacademy.vendas.domain.Vendedor;
import br.com.tiacademy.vendas.dto.VendedorDTO;

@RestController
@RequestMapping("/vendedor")
public class VendedorController extends CrudController<Vendedor, VendedorDTO, Long >  {
	
}
