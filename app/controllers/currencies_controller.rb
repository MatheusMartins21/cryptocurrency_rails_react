class CurrenciesController < ApplicationController
  def index
  end

  def search
    render json: { currencies: currencies }
  end

  # Pega a moeda(ID) e a quantidade informada
  # Retorna o valor calculado
  def calculate
    amount = params[:amount]
    render json: {
      currency: currency,
      current_price: currency.current_price,
      amount: amount,
      value: currency.calculate_value(amount)
    }
  end

  private

  def currency
    @currency ||= Currency.find(params[:id])
  end

  def currencies
    @currencies ||= Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
  end
end