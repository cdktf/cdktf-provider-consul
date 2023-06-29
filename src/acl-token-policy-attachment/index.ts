/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/resources/acl_token_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclTokenPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/resources/acl_token_policy_attachment#id AclTokenPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The policy name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/resources/acl_token_policy_attachment#policy AclTokenPolicyAttachment#policy}
  */
  readonly policy: string;
  /**
  * The token accessor id.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/resources/acl_token_policy_attachment#token_id AclTokenPolicyAttachment#token_id}
  */
  readonly tokenId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/resources/acl_token_policy_attachment consul_acl_token_policy_attachment}
*/
export class AclTokenPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_acl_token_policy_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/resources/acl_token_policy_attachment consul_acl_token_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclTokenPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AclTokenPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_acl_token_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.17.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._policy = config.policy;
    this._tokenId = config.tokenId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // token_id - computed: false, optional: false, required: true
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.stringToTerraform(this._policy),
      token_id: cdktf.stringToTerraform(this._tokenId),
    };
  }
}
