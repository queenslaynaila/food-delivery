class CustomersController < ApplicationController
  before_action :set_customer, only: %i[ show update destroy ]

  # GET /customers
  def index
    @customers = Customer.all

    render json: @customers
  end
  # GET /customers/1
  def show
     customer = Customer.find_by(id: session[:customer_id])
     if customer
      render json: customer
     else
      render json: {error:"Not authorized"}, status: :unauthorized
     end
  end

  # POST /customers
  def create
    @customer = Customer.new(customer_params)

    if @customer.save
      render json: @customer, status: :created, location: @customer
    else
      render json: @customer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /customers/1
  def update
    if @customer.update(customer_params)
      render json: @customer
    else
      render json: @customer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /customers/1
  def destroy
    @customer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def customer_params
      params.require(:customer).permit(:firstname, :lastname, :username, :email, :password_digest, :phonenumber, :address, :status)
    end
end
