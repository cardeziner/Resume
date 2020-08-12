class Api::V1::JobsController < JobsController

  def index
    render json: Jobs.all
  end

end
