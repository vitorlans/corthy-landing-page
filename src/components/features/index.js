import React, { Component } from 'react';

let s = [
  {
    feature: 'Agenda',
    description:
      'Controle os agendamentos, receba lembretes e compartilhe horários livres pelo whatsapp.',
    image: "ic_agenda.png"
  },
  {
    feature: 'Vendas',
    description:
      'Registre as vendas e tenha controle dos produtos e serviços prestados. ',
      image: "ic_sale.png"
  },
  {
    feature: 'Clientes',
    description:
      'Tenha um relacionamento inteligente com seu cliente, registre fotos e saiba tudo sobre ele.',
      image: "ic_customer.png"
  },
  {
    feature: 'Comissões',
    description:
      'Calcule comissões automaticamente de serviços e produtos vendidos pelos profissionais.',
      image: "ic_commission.png"
  },
  {
    feature: 'Estoque',
    description:
      'Tenha controle sobre o seu estoque com entradas e saídas e saiba o momento certo de reabastecê-lo.',
      image: "ic_stock.png"
  },
  {
    feature: 'Financeiro',
    description:
      'Por meio das vendas e despesas, tenha em mãos todos os gastos e lucros do seu negócio.',
      image: "ic_financial.png"
  },
  {
    feature: 'Relatórios',
    description:
      'Visualize relatórios inteligentes de comissões, financeiro, clientes aniversariantes e muito mais.',
      image: "ic_report.png"
  },
  {
    feature: 'Online',
    description:
      'Seus dados estarão protegidos na nuvem usando a mesma segurança da Google, mesmo que troque de celular você nunca perderá os seus dados.',
      image: "ic_online.png"
  },
  {
    feature: 'Suporte',
    description:
      'Atendimento exclusivo para o seu negócio. Tem alguma dúvida? Estamos prontos para ajudar a qualquer momento.',
      image: "ic_support.png"
  }
];

class Features extends Component {
  render() {
    const features = s.map((f, index) => {
      return (
        <div key={'feature' + index} className="features__column">
          <img
            className="features__column-icon"
            src={"images/features/" + f.image}
            alt={f.feature}
            title={f.feature}
          />
          <h3 className="title title--center title--small">{f.feature}</h3>
          <p className="description">{f.description}</p>
        </div>
      );
    });

    return (
      <section className="section features">
        <div className="container container-lg">
          <h2 className="title title--center">Nossos Diferencial</h2>
          <p className="features__description description description--center">
            Conheça as principais características de nosso aplicativo 💕
          </p>
        </div>
        <div className="container container-xl features__grid">{features}</div>
      </section>
    );
  }
}

export default Features;
