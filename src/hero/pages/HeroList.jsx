import React, { useState } from 'react'
import { Navbar } from '../components'
import { Button, Input, Space, Table, Tag } from 'antd'
import { useFetchMarvel } from '../../hooks';


export const HeroList = () => {
    /*  const [search, setSearch] = useState(""); */
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const { characters, loading, total } = useFetchMarvel(page, pageSize);

    const columns = [
        {
            title: "Imagen",
            dataIndex: "thumbnail",
            key: "thumbnail",
            render: (thumbnail) => (
                <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="thumbnail" width={50} />
            ),
        },
        {
            title: "Nombre",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Descripción",
            dataIndex: "description",
            key: "description",
            render: (text) => (text ? text : "Sin descripción"),
        },
        {
            title: "Acciones",
            key: "actions",
            render: () => (
                <Button type="primary" onClick={() => null}>
                    Ver Detalles
                </Button>
            ),
        },
    ];

    return (
        <div className='hero-container'>
            {/* TODO: implementar buscador de heroes
            <Input.Search
                value={search}
                placeholder="Buscar personaje..."
                onSearch={(value) => {
                    setSearch(value);
                    setPage(1);
                }}
                enterButton
                style={{ marginBottom: 20 }}
            /> */}
            <Table
                columns={columns}
                dataSource={characters.map((char) => ({ ...char, key: char.id }))}
                loading={loading}
                pagination={{
                    current: page,
                    total,
                    pageSize,
                    onChange: (p) => setPage(p),
                    onShowSizeChange: (p, s) => setPageSize(s),
                }}
            />
        </div>
    )
}
