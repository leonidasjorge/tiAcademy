package br.com.tiacademy.vendas.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.tiacademy.vendas.core.crud.CrudConverter;
import br.com.tiacademy.vendas.domain.Item;
import br.com.tiacademy.vendas.dto.ItemDTO;
import br.com.tiacademy.vendas.repository.ServicoRepository;

@Component
public class ItemConverter implements CrudConverter<Item, ItemDTO> {

	@Autowired
	private ServicoConverter servicoConverter;
	
	@Autowired
	private ServicoRepository servicoRepository;
	
	@Override
	public ItemDTO entidadeParaDto(Item entidade) {		
		
		var dto = new ItemDTO();
		
		dto.setId(entidade.getId());
		dto.setQuantidade(entidade.getQuantidade());
		dto.setValor(entidade.getValor());
		
		dto.setServico(servicoConverter.entidadeParaDto(entidade.getServico()));
		
		return dto;
	}

	@Override
	public Item dtoParaEntidade(ItemDTO dto) {
		
		var item = new Item();
		
		item.setId(dto.getId());
		item.setQuantidade(dto.getQuantidade());
		item.setValor(dto.getValor());
		item.setServico(servicoRepository.findById(dto.getServicoId()).orElse(null));
		
		return item;
	}
	
}
