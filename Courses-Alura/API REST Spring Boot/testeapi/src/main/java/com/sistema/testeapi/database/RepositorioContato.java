package com.sistema.testeapi.database;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sistema.testeapi.entidade.Contato;

public interface RepositorioContato extends JpaRepository<Contato,Long> {
    
}
