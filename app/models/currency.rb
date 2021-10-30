class Currency < ApplicationRecord
  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end

  def current_price
    request = HTTParty.get(url + self.slug)
    response = JSON.parse(request.body).dig('market_data').dig('current_price').dig('brl').to_f
  end

  def url
    'https://api.coingecko.com/api/v3/coins/'
  end
end
