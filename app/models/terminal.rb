class Terminal < ActiveRecord::Base
	belongs_to :user
	has_many   :sensors, :dependent => :destroy

	validates :name, presence: true,
					 length: { maximum: 20 },
					 format: { with: /\A[a-zA-Z0-9' ']*\z/ }

  validates :password, presence: true,
           length: { maximum: 20 },
           format: { with: /\A[a-zA-Z0-9' ']*\z/ }

	validates :description,
					 length: { maximum: 60 },
					 format: { with: /\A[a-zA-Z0-9' ']*\z/ }
end
