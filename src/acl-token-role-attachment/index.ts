// https://www.terraform.io/docs/providers/consul/r/acl_token_role_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclTokenRoleAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token_role_attachment#id AclTokenRoleAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The role name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token_role_attachment#role AclTokenRoleAttachment#role}
  */
  readonly role: string;
  /**
  * The token accessor id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token_role_attachment#token_id AclTokenRoleAttachment#token_id}
  */
  readonly tokenId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/consul/r/acl_token_role_attachment consul_acl_token_role_attachment}
*/
export class AclTokenRoleAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_acl_token_role_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/consul/r/acl_token_role_attachment consul_acl_token_role_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclTokenRoleAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AclTokenRoleAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_acl_token_role_attachment',
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
    this._role = config.role;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
      role: cdktf.stringToTerraform(this._role),
      token_id: cdktf.stringToTerraform(this._tokenId),
    };
  }
}
