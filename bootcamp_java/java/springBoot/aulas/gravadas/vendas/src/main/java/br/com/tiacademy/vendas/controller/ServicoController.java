package br.com.tiacademy.vendas.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.tiacademy.vendas.core.crud.CrudController;
import br.com.tiacademy.vendas.domain.Servico;
import br.com.tiacademy.vendas.dto.ServicoDTO;

@RestController
@RequestMapping("/servico")
public class ServicoController extends CrudController<Servico, ServicoDTO, Long> {

}
