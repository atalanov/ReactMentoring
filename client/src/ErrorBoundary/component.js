export default (props) => (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <h4 class="alert-heading">Error:</h4>
        <p>Message: {props.message}</p>
        <hr />
        <p class="mb-0">Stack trace: <br />
            {props.componentStack}
        </p>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
);