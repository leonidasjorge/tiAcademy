package br.com.tiacademy.catalogo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.tiacademy.catalogo.entity.Gravadora;

@RestController
@RequestMapping("/gravadora")
public class GravadoraController extends ControllerCatalogo<Gravadora, Long> {

}
