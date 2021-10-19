import React from "react";

const Buttons = () => {
      return (
            <div >      
                  <div class="ui primary animated button" tabindex="0">
                  <div class="visible content">Load</div>
                  <div class="hidden content">
                  <i class="undo alternate icon"></i>
                  </div>
                  </div>
                  <div class="ui positive vertical animated button" tabindex="0">
                  <div class="visible content">Add</div>
                  <div class="hidden content">
                  <i class="plus circle icon"></i>
                  </div>
                  </div>
                  <div class="ui negative animated fade button" tabindex="0">
                  <div class="visible content">Delete</div>
                  <div class="hidden content">
                  <i class="minus circle icon"></i>
                  </div>
                  </div>
            </div>
      );
};

export default Buttons;