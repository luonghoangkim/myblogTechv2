'use client'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Profile = () => {
    return (
        <Container className="mt-5">
            <Card>
                <Card.Header>
                    <div className='flex justify-between items-center'>
                    <h1>Thông tin cá nhân</h1>
                    <span className="text-blue-500 cursor-pointer">Chỉnh sửa</span>
                    </div> 
                </Card.Header>
                <Card.Body>
                    <div className="mb-3">
                        <label className="form-label font-weight-bold">Email:</label>
                        <span>example@example.com</span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label font-weight-bold">Full Name:</label>
                        <span>John Doe</span>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Profile;
