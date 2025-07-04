import React from 'react';
import Card from './Card';

const MainContent = () => {
  return (
    <div>
        <Card name="Card name">
            <div>
                title
            </div>
            <div>
                Content
            </div>
            <div>
                <button>Save</button>
            </div>
        </Card>
    </div>
  )
}

export default MainContent;