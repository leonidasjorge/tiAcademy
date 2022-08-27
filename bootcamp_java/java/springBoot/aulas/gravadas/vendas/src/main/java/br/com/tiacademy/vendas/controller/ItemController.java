package br.com.tiacademy.vendas.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.tiacademy.vendas.core.crud.CrudController;
import br.com.tiacademy.vendas.domain.Item;
import br.com.tiacademy.vendas.dto.ItemDTO;

@RestController
@RequestMapping("/item")
public class ItemController extends CrudController<Item, ItemDTO, Long> {

}
